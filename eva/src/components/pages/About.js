// import axios from 'axios';
// const About = () =>{
//   const [about, setAbout] = useState({})
//   useEffect(()=>{
//     axios.get('/api/about')
//       .then(res =>{
//         setAbout
//       })
//   },[])
// }

function getData(url) {
  return new Promise((resolve, reject) => {
    console.log(url);
    setTimeout(() => {
      resolve({
        aboutMe: 'Sharing a little bit of my story...',
        generalOverview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        statistics: 'And for those that don\'t fancy reading: \n Male, 200 years old. \n Five feet 110 inches \n Favorite fonts:Roboto \n Loves to learn new things'
      });
    }, 2000);
  })
}

// getData().then(data => console.log(data))

export default getData;