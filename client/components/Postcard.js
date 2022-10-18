import React from "react";
import Link from "next/link";

function Postcard({ id }) {
  return (
    <Link href={`/post/${id}`}>
      <div className="content" id={id}>
        <div className="content-thumbnail">
          <img src="/hamster.jpg" alt="content thumnail" />
        </div>
        <div className="content-preview">
          <h2 className="content-title">제목</h2>
          <span>날짜</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            cumque sunt. Corrupti ducimus tenetur, exercitationem nostrum
            voluptates aliquid veritatis
          </p>
        </div>

        <style jsx>{`
          .content {
            width: 370px;
            height: 470px;
            margin: 0 30px 30px 0;
            background-color: rgb(176, 209, 204);
            /* 색상 랜덤으로? 배열에 색상 정해서 */
            cursor: pointer;
          }

          .content-thumbnail {
            width: 100%;
            height: 200px;
            overflow: hidden; //넘치는 위아래 부분 가려주기
            /* position: relative; */
          }

          .content-thumbnail img {
            width: 100%;
          }

          .content-preview {
            margin: 30px;
          }
        `}</style>
      </div>
    </Link>
  );
}

export default Postcard;
