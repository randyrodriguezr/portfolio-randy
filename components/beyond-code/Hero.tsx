export default function Hero() {

    return (

    <section
  className="
    flex
    min-h-[50vh]
    flex-col
    items-center
    justify-center
    bg-gradient-to-br
    from-green-700
    via-emerald-600
    to-teal-500
    px-6
    py-20
    text-center
  "
>

        <h1 className="text-6xl md:text-8xl font-bold text-white">
        Más allá del código
      </h1>

  <p className="mt-4 text-xl text-green-100">
    Mi historia fuera del desarrollo de software.
  </p>

  <div className="mt-10 w-full max-w-6xl">
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
      <p className="text-lg leading-9 text-gray-600">
                La tecnología es una parte importante de mi vida,
                pero también disfruto superar desafíos personales,
                explorar nuevos lugares y practicar actividades que
                fortalecen mi disciplina, resiliencia y crecimiento
                continuo.
            </p>

        </div>

    </div>

</section>

    );

}