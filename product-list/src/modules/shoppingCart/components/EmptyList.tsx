import Image from "next/image";
import cake from "../../../../public/icons/cake.svg";
import { useTranslations } from "next-intl";

export default function EmptyList() {
  const t = useTranslations('myProducts')

  return (
    <article className="bg-text-secondary-clr px-4 py-4 rounded-lg max-h-[35rem] max-w-[25rem] w-full shadow-md shadow-text-clr-primary ">
      <h2 className="text-accent-clr-light font-bold text-2xl">
        {t('title')} (0)
      </h2>
      <figure className="gap-4 h-full flex flex-col justify-center items-center star-opacity-min">
        <Image
          onError={(e) => console.log(e)}
          src={cake}
          alt="cake"
          width={180}
          height={180}
        />
        <figcaption className="text-text-clr-primary-light font-bold text-lg text-center">
          {t('empty')}
        </figcaption>
      </figure>
    </article>
  );
}
