
import { useParams } from 'react-router-dom';



export const VideoDetail = ()=>{
    const params = useParams()
    const id = params.id;
    return (
        <div>
            Video {id}
        </div>
    )
}