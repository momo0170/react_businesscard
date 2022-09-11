import styles from '../css/cardMaker.module.css';

function CardMaker() {
  const [card, setCards] = useState([
    {
      id: '1',
      name: '이창한',
      theme: 'light',
      title: '프론트엔드 개발자',
      email: 'momo017097@gmail.com',
      message: 'This is maessage',
      fileName: 'changhan',
      fileURL: 'changhan.png',
    },
    {
      id: '2',
      name: '홍길동',
      theme: 'light',
      title: '웹 디자이너',
      email: 'gildong@gmail.com',
      message: 'This is gildong message',
      fileName: 'gildong',
      fileURL: 'gildong.png',
    },
    {
      id: '3',
      name: '김민재',
      theme: 'light',
      title: '축구선수',
      email: 'minjae@gmail.com',
      message: '나폴리 수비수',
      fileName: 'minjae',
      fileURL: 'minjae.png',
    },
  ]);
  return (
    <div className={styles.frame}>
      <input className={styles.name} placeholder="이름" />
      <input className={styles.job} placeholder="직업" />
      <input className={styles.email} placeholder="이메일" />
      <textarea className={styles.message} placeholder="메세지" />
      <div className={styles.btns}>
        <button className={styles.photoBtn}>사진 추가</button>
        <button className={styles.addBtn}>추가</button>
      </div>
    </div>
  );
}

export default CardMaker;
