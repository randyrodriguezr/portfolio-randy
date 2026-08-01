import { ProfileStat } from "@/types/ProfileStat";

export default function ProfileStatCard({

    icon: Icon,

    value,

    title,

}: ProfileStat) {

    return (

        <div
    className="
        flex-1
        group
        flex
        flex-col
        items-center
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-500
        hover:shadow-lg
    "
>

            <div
                className="
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                    transition
                    group-hover:bg-green-600
                "
            >

                <Icon
                    size={30}
                    className="
                        text-green-600
                        transition
                        group-hover:text-white
                    "
                />

            </div>

            <h2
                className="
                    text-4xl
                    font-bold
                    text-gray-800
                "
            >
                {value}
            </h2>

            <p
                className="
                    mt-2
                    text-center
                    text-sm
                    text-gray-500
                "
            >
                {title}
            </p>

        </div>

    );

}