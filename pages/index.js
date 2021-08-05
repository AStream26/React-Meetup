import MeetupList from "../components/meetups/MeetupList";

const dummy = [
  {
    id: "M1",
    image:
      "https://images.unsplash.com/photo-1584732200355-486a95263014?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Welcome to the First app",
    address:
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd",
  },
  {
    id: "M1",
    image:
      "https://images.unsplash.com/photo-1584732200355-486a95263014?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Welcome to the First app",
    address:
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd",
  },
  {
    id: "M1",
    image:
      "https://images.unsplash.com/photo-1584732200355-486a95263014?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Welcome to the First app",
    address:
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhhdhdijsdh askjdbksad askjdbkjasd kjsd",
  },
];

const HomePage = () => {
  return <MeetupList meetups={dummy} />;
};

export default HomePage;
