import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetup = () => {
  const router = useRouter();
  let onAddMeetupHandler = async (meeting) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meeting),
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetup;
