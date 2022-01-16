Technical requirements

1. Search results should come from NASA’s free APIs, for which you’ll need a free API key from https://api.nasa.gov - you do not need to enter anything more than your first name, last name, and email address (i.e. application url is not required)

- We’ve provided screenshots below of demo apps we built using the Astronomy Picture of the Day or Mars Rover Photos APIs (along with Shopify’s open source React component library: Polaris).
- You are free to use any NASA API you like
- You are free to use any front end framework/component library you like (or none at all!)

2. Each image result should list at least a title, date of capture (ideally in earth_date) and a button to “like” that image.
3. Each image can be “liked”, and a user should be able to undo their “like”
4. The HTML that ends up being served client-side should be accessible and semantic (MDN reference)

5. more option
   Save likes if the user leaves or reloads the page (ok)
   Animate the “like” action (might we suggest a heart?) (ok)
   Add a loading state while we wait for NASA’s API to return data
   Create shareable links for each image (ok)  
   Add a date-picker to be able to browse photos starting from a specific date

Your API key for voicihojun@gmail.com is:

bbkSglcrskxOTKlFsmm1354NxeHRetmw6Ec2GbCw
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example:

https://api.nasa.gov/planetary/apod?api_key=bbkSglcrskxOTKlFsmm1354NxeHRetmw6Ec2GbCw

TIL

1. const { data: img } = await axios.get(API_KEY);
   //axios.get으로 받은 이미지의 data 값만 받아와서 img라는 변수에 저장한다.

2. useEffect 사용법을 아직 확실히 잘 모르겠음.
   startDate 입력시 입력하자마자는 startDate = "", 즉 입력했음에도 불구하고 null 값이 나옴.
   렌더링이 한번 돌고 나서 다시 입력하면 그제서야 그 전에 입력했던 값이 나온다.
   예) 2022-01-10 을 첫번째로 입력시 api 의 start_date = "" 으로 입력되고,
   두번째에 다른 값을 넣었을 때(2022-01-01), 그제서야 start_date = "2022-01-10" 이 나온다.
   이 부분이 문제임.

3. npm i react-copy-to-clipboard
   import { CopyToClipboard } from "react-copy-to-clipboard" 임포트 한후
   </CopyToClipboard text={복사할 링크주소}> 로 감싸줌

4. npm i react-toastify
   index.js에서
   import { ToastContainer } from "react-toastify"; 임포트 한 후에 아래와 같이 적용해줌.
   <React.StrictMode>
   <App />
   <ToastContainer />
   </React.StrictMode>,

사용할 js 파일에서 import { toast } from "react-toastify" 로 임포트 한후,
toast.success("copied!")
이렇게까지만 하면 copied 와 함꼐 엄청 큰 체크표시가 나옴.
그래서 아래 걸 임포트 해주면 옆에서 한줄짜리 표시가 나옴.
import "react-toastify/dist/ReactToastify.css";

5. HTML5 DATA 속성
   HTML 요서의 'data-'로 시작하는 속성인데, 이것은 특정데이터를 DOM 요소에 저장해두기 위함이다.
   데이터속성은 'data-'로 시작해야 하며, 브라우저는 이러한 데이터 속성에 어떠한 행동도 관여하지 않기 때문에 개발자는 요소에 특정한 데이터를 저장하고 싶은 경우 자유롭게 사용할 수 있다.
   <input type="text" data-value="001" id="username">
   var input = document.querySelector('#username')
   console.log(input.dataset.value) ==> "001"

장점 : 이전과 같이 hidden으로 태그를 숨겨두고 데이터를 저장할 필요가 없다는 점. 따라서 코드가 훨씬 간결해진다.

6. 로컬스토리지에 저장된 images.length === 0 일 때만 fetchImages를 실행하여 이미지를 새로 가져온다.
   로컬스토리지에 저장된 이미지가 있는 경우 새로고침해도 여전히 like 등의 정보를 유지한채 가져오도록 한다.

7. 테스트 작성
8. 링크 눌렀을 때 copied 표시로 바뀌도록 하는 거 알아보기
9. datepicker
   import DatePicker from "react-datepicker";
   import "react-datepicker/dist/react-datepicker.css";
   <DatePicker
   selected={startDate}
   dateFormat="yyyy-MM-dd" // 날짜 형식
   onChange={handleStartDate}
   maxDate={new Date()}
   />
   이런 형식으로 사용되는데, onChange={date=>setStartDate(date)} 이런 형식인것을 handleStartDate로 받아서 따로 작성한것임.

10. ########### 하트 애니메이션 반대임
    처음에는 하트 애니메이션이 이상없이 작동하지만 새로 고침해서 이미 하트가 좋아요 표시되어 있는 경우,
    레드하트에서 엠티하트로 변할때 pulse가 작동됨.

- 수정했음. like => image.like로 해서 하트 애니메이션이 이상없이 작동되기는 하지만 레드하트인 상태에서 새로고침할 경우 pulse가 작동됨.
- 펄스 없애고 싶음.

11. startDate useState 없애기
12. 날짜 넣은 후 submit 했을 때 날짜부분 text 가 없어지도록 하기

13. TypeError: images.map is not a function
    images 내부에 알맞지 않은 data 속성이 있거나 그 데이터 속성을 잘못 사용하였을 때 에러가 나오는 듯 하다.

14. loading 시 로딩메시지 나오게 하기
