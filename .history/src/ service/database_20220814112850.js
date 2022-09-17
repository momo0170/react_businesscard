import { getDatabase, ref, set, onValue } from 'firebase/database';

// set을 사용해서 지정된 참조에 데이터를 저장
// 해당 경로의 기존 데이터를 모두 바꿈
// 하위 노드를 포함하여 지정된 위치의 데이터를 덮어 씀
function writeUserData(userId, name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });
}

// onValue 메소드가 이벤트를 관찰
// 이벤트가 발생하면 지정한 경로에 있는 콘텐츠의 정적 스냅샷을 읽음
// 처음에 리스너에 연결될 때 한 번 트리거되고, 하위 요소를 포함한 데이터가 변경될 때마다 다시 트리거
// 리스너는 이벤트 발생 시점에 지정된 위치에 있던 데이터르 포함하는 스냅샷을 수신
// val() 메소트를 이용해 스냅샷 데이터 검색 가능
const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  ㅠ;
  updateStarCount(postElement, data);
});

export default db;
