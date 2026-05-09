import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about__inner">
        {/* 左側の画像部分 */}
        <div className="about__profile">
          <div>画像を配置</div>
          <p className="profile__name">kandalog</p>
          <p className="profile__detail">Webエンジニア</p>
          <ul className="sns__list">
            <li className="sns__item">
              <a href=""></a>
              <Image
                src="/sns/x.svg"
                width={40}
                height={40}
                alt="xのアイコン"
              ></Image>
            </li>
            <li className="sns__item">
              <Image
                src="/sns/github.svg"
                width={40}
                height={40}
                alt="githubのアイコン"
              ></Image>
            </li>
            <li className="sns__item">
              <Image
                src="/sns/mail.svg"
                width={40}
                height={40}
                alt="mailのアイコン"
              ></Image>
            </li>
          </ul>
        </div>
        {/* 右側の説明部分 */}
        <div className="about__detail">
          <h2 className="about__head">About me</h2>
          <p className="about__description">
            テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,
            テキスト,テキスト,テキスト,テキスト,テキスト,テキスト,
            テキスト,テキスト,テキスト,テキスト,テキスト,テキスト
          </p>

          <button className="button about__btn">
            詳しいプロフィールを見る →
          </button>
        </div>
      </div>
    </div>
  );
};
