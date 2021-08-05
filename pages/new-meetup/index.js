import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  let onAddMeetupHandler = (meeting) => {
    console.log(meeting);
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetup;
