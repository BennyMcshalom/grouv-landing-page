import DimensionVisual from "./DimensionVisual";
import WaitlistForm from "./WaitlistForm";

export default function Join() {
  return (
    <section className="join" id="join">
      <DimensionVisual />
      <div className="join-content">
        <p className="eyebrow">02 / BE FIRST IN</p>
        <h2 className="reveal">
          Your people are
          <br />
          <em>already out there.</em>
        </h2>
        <p>
          Tell us where you are. Grouv will bring your chapter&rsquo;s people
          closer.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}
