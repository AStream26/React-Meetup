import Meetupdetail from "../../components/meetups/Meetupdetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const Meetup = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupdetail.title}</title>
        <meta name="description" content={props.meetupdetail.description} />
      </Head>
      <Meetupdetail
        img={props.meetupdetail.image}
        title={props.meetupdetail.title}
        address={props.meetupdetail.address}
        desc={props.meetupdetail.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://astream26:26022999@cluster0.hsbem.mongodb.net/meetings?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collections = db.collection("meetings");
  const data = await collections.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: data.map((meeting) => ({
      params: { meetup: meeting._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch Data
  const meetupId = context.params.meetup;
  const client = await MongoClient.connect(
    "mongodb+srv://astream26:26022999@cluster0.hsbem.mongodb.net/meetings?retryWrites=true&w=majority"
  );
  const db = client.db();
  const collections = db.collection("meetings");
  const data = await collections.findOne({ _id: ObjectId(meetupId) });
  // console.log(meetupId);

  return {
    props: {
      meetupdetail: {
        id: data._id.toString(),
        address: data.address,
        title: data.title,
        description: data.description,
        image: data.image,
      },
    },
  };
}

export default Meetup;
