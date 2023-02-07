import { folder, gym, rocket, sun } from '../components/assets';
import Badge from '../components/atoms/Badge';

function Profile() {
   return (
      <>
         <div>Profile</div>
         <h3 className="text-xl text-black font-bold my-4 ml-6">Insignias ganadas</h3>
         <div className="card bg-base-100 flex flex-row flex-wrap content-center gap-1 mx-3 px-5">
            <Badge
               classBody="card-body py-0 px-0 gap-0 items-center text-center"
               classFigure="px-2 pt-4"
               classTitle="card-title"
               img={sun}
               text="+5 dudas"
            >
               Solete
            </Badge>
            <Badge
               classBody="card-body py-0 px-0 gap-0 items-center text-center"
               classFigure="px-2 pt-4 mt-2"
               classTitle="card-title"
               img={folder}
               text="+3 wikis"
            >
               Megamind
            </Badge>
            <Badge
               classBody="card-body pt-0 pb-6 px-0 gap-0 items-center text-center"
               classFigure="px-2 pt-4"
               classTitle="card-title"
               img={rocket}
               text="+2 explicaciones"
            >
               Imparable
            </Badge>
         </div>
         <h3 className="text-xl text-black font-bold mt-7 mb-5 ml-6">Insignias pendientes</h3>
         <div className="card bg-base-100 flex flex-row flex-wrap content-center gap-1 mx-3 px-5">
            <Badge
               classBody="card-body py-0 px-0 gap-0 items-center text-center"
               classFigure="px-2 pt-5"
               classTitle="card-title text-gray-400"
               img={gym}
               text="+3 revisiones código"
            >
               Cordinator
            </Badge>
         </div>
      </>
   );
}

export default Profile;
