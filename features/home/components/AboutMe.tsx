import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about__inner">
        {/* 左側の画像部分 */}
        <div className="about__profile">
          <div className="about__profile__img">
            <Image
              src="/profile-img.png"
              width={100}
              height={100}
              alt="プロフィール画像"
            ></Image>
          </div>
          <p className="profile__name">kandalog</p>
          <p className="profile__detail">Webエンジニア</p>
          <ul className="sns__list">
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
        </div>
        {/* 右側の説明部分 */}
        <div className="about__detail">
          <h2 className="about__head">About me</h2>
          <p className="about__description">
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
    </div>
  );
};
