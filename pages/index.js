import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Meetings</title>
        <meta
          name="description"
          content="A react Meeting App Created using nextjs framework which is a minimilistic Framework for app
                                         Here Display all the meeting of the App"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  // fetch Data from API

  const client = await MongoClient.connect(
    "mongodb+srv://astream26:26022999@cluster0.hsbem.mongodb.net/meetings?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collections = db.collection("meetings");

  const data = await collections.find().toArray();
  //console.log(data);
  return {
    props: {
      meetups: data.map((meeting) => ({
        title: meeting.title,
        image: meeting.image,
        address: meeting.address,
        id: meeting._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
