import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="rounded-lg shadow mt-5 flex gap-3 p-4">
      {/* 左側の画像部分 */}
      <div className=" text-center min-w-40">
        <div className="rounded-full">
          <Image
            src="/profile-img.png"
            width={100}
            height={100}
            alt="プロフィール画像"
          ></Image>
        </div>
        <p className="font-bold">kandalog</p>
        <p className="text-xs pt-1">Webエンジニア</p>
        <SnsList />
      </div>
      {/* 右側の説明部分 */}
      <div className="">
        <h2 className="font-bold">About me</h2>
        <p className="mt-4">
          ものづくりが好きなエンジニアです。
          <br />
          「シンプルで心地よい暮らし」をテーマに、日々の発見や学び、
          <br />
          作ったもののここに残しています。
          <br />
          ゆるく、長く、続けていけたらと思っています。
        </p>

        <button className="button about__btn">
          詳しいプロフィールを見る →
        </button>
      </div>
    </div>
  );
};

const SnsList = () => {
  return (
    <ul className="flex mt-2 justify-center gap-4">
      <li className="sns__item">
        <a href=""></a>
        <Image
          src="/sns/x.svg"
          width={30}
          height={30}
          alt="xのアイコン"
        ></Image>
      </li>
      <li className="sns__item">
        <Image
          src="/sns/github.svg"
          width={30}
          height={30}
          alt="githubのアイコン"
        ></Image>
      </li>
      <li className="sns__item">
        <Image
          src="/sns/mail.svg"
          width={30}
          height={30}
          alt="mailのアイコン"
        ></Image>
      </li>
    </ul>
  );
};
