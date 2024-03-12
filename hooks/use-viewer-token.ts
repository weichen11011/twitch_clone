import { toast } from "sonner"
import { useEffect, useState } from "react"
import { JwtPayload, jwtDecode} from "jwt-decode"
import { createViewerToken } from "../actions/token"


export const useViewerToken = (hostIndentity:string) => {
    const [token,setTooken] = useState("")
    const [name,setName] = useState("")
    const [identity,setIndentity] = useState("")

    useEffect (() => {
        const createToken = async () => {
            try{
                const viewerToken = await createViewerToken(hostIndentity)
                setTooken(viewerToken)

                const decodedToken = jwtDecode(viewerToken) as JwtPayload & { name?: string}

                const name = decodedToken?.name
                const identity = decodedToken.jti
                if(identity){
                    setIndentity(identity)
                }

                if (name){
                    setName(name)
                }
            }catch{
                toast.error("Something went wrong")
            }
        }
        createToken()
    },[hostIndentity])

    return{
        token,
        name,
        identity
    }
}