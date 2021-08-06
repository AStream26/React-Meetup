import classes from "./Meetupdetail.module.css";
const Meetup = ({ img, title, address, desc }) => {
  return (
    <section className={classes.detail}>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>

      <p>{desc}</p>
    </section>
  );
};

export default Meetup;
