export default function DialogManual({ StatusDialog, DataDialog }) {
  return (
    <article key={DataDialog?.NombrePg} className="p-2 absolute">
      <div
        className={`${
          StatusDialog ? "flex" : " hidden"
        } z-80  bg-white items-center rounded-2xl p-2 shadow-2xl shadow-gray-700/50 border border-gray-300`}
      >
        <img
          className="h-60 w-60 object-cover rounded-2xl"
          src="https://pgr.gob.do/wp-content/uploads/2022/05/LA2A1422.jpg"
          alt="Prueba"
        />
        <div className="h-60 w-60 text-black flex gap-3 flex-col justify-between pl-2">
          <div>
            <h2 className="text-2xl">{DataDialog?.NombrePg}</h2>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
              culpa aliquid. Harum dolorem, aliquid ratione neque, dicta
              corporis a accusamus soluta repudiandae alias reiciendis dolores
              atque, ad est ducimus. Nobis.
            </p>
          </div>
          <div className="w-full flex justify-end">
            <button className="border-0 p-2  rounded-lg bg-primary text-white">
              Agendar cita
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
