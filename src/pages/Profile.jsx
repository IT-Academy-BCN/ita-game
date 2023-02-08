import { FooterMenu, Navbar } from '../components';
import { folder, gym, rocket, sun } from '../components/assets';
import { Card, Title } from '../components/atoms/index';
import Badge from '../components/atoms/Badge';

function Profile() {
  return (
    <div className="h-full w-full">
      <Navbar>Perfil</Navbar>
      <div className="p-5 gap-4 h-screen">
        <Card>
          <div className="flex flex-row w-100 justify-center relative">
            {/* avatar box */}
            <div className="flex flex-col justify-center items-center absolute">
              {/* avatar*/}
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full p-10">
                  <span className="text-xs">AA</span>
                </div>
              </div>
              {/* name */}
              <div className="text-black font-bold ">Ona Costa</div>
              {/* dev position */}
              <div className="text-neutral-focus font-bold">
                FrontEnd Developer
              </div>
            </div>
            {/* edit */}
            <div className="w-1/6 absolute right-0 ">
              <button className="btn btn-circle bg-primary">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.06 6.67091L11.98 7.61674L2.92 16.9311H2V15.9853L11.06 6.67091V6.67091ZM14.66 0.481873C14.41 0.481873 14.15 0.58468 13.96 0.780016L12.13 2.6614L15.88 6.5167L17.71 4.63531C18.1 4.23436 18.1 3.58667 17.71 3.18572L15.37 0.780016C15.17 0.5744 14.92 0.481873 14.66 0.481873V0.481873ZM11.06 3.76145L0 15.132V18.9873H3.75L14.81 7.61674L11.06 3.76145V3.76145Z"
                    fill="#323232"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* card body */}
          <div className="flex flex-col  ">
            {/* progressbar  container*/}
            <div className="flex flex-col ">
              {/* bar */}
              <progress
                className="progress progress-primary w-100"
                value="70"
                max="100"
              ></progress>
              {/* data bar */}
              <div className="flex justify-between">
                <div className="flex justify-center">
                  <p className="font-bold text-black text-sm">250 ITAS </p>
                </div>
                <div className="flex justify-center">
                  <p className="font-bold text-black text-sm">25 ITAS </p>
                  <p className="text-neutral-focus font-bold text-sm">
                    para subir de nivel
                  </p>
                </div>
              </div>
            </div>

            {/* divider section */}
            <div className="flex flex-col">
              <div className="divider before:bg-secondary after:bg-secondary"></div>
              <div className="flex justify-between">
                <p className="text-black text-base">Actividades Realizadas</p>
                <p className="text-black text-base">48</p>
              </div>
              <div className="divider before:bg-secondary after:bg-secondary"></div>
              <div className="flex justify-between">
                <p className="text-black text-base">Fecha de alta</p>
                <p className="text-black text-base">21/12/2022</p>
              </div>
            </div>
          </div>
        </Card>
        <Title>Insignias ganadas</Title>
        <div className="card bg-base-100 flex flex-row flex-wrap content-center gap-1 mx-3 px-5">
          <Badge
            classBody="card-body py-0 px-0 gap-0 items-center text-center"
            classFigure="px-2 pt-4"
            classTitle="card-title text-black"
            img={sun}
            text="+5 dudas"
          >
            Solete
          </Badge>
          <Badge
            classBody="card-body py-0 px-0 gap-0 items-center text-center"
            classFigure="px-2 pt-4 mt-2"
            classTitle="card-title text-black"
            img={folder}
            text="+3 wikis"
          >
            Megamind
          </Badge>
          <Badge
            classBody="card-body pt-0 pb-6 px-0 gap-0 items-center text-center"
            classFigure="px-2 pt-4"
            classTitle="card-title text-black"
            img={rocket}
            text="+2 explicaciones"
          >
            Imparable
          </Badge>
        </div>
        <h3 className="text-xl text-black font-bold mt-7 mb-5 ml-6">
          Insignias pendientes
        </h3>
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
        {/* <Card>card con datos</Card> */}
        <Title>Insignias pendientes</Title>
        <Card>card con datos</Card>
      </div>
      <FooterMenu />
    </div>
  );
}
export default Profile;
