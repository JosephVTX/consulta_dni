export const Profile = ({img}:{img?:string}) => {
  return (
    
    <img className="rounded-md h-[10rem] w-[7.4rem]" src={img ? `data:image/png;base64,${img}` : 'https://cdn-icons-png.flaticon.com/512/25/25634.png'} alt="Profile" />
  )
}