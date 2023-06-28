import s from './blog.module.css'

export default function LoadingPosts(){
    return <div style={{background: "transparent"}} className={s.loader}>Loading...</div>
}