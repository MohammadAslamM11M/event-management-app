import Tag from "@/components/Tag";
const EventDetails = async ({ params }) => {
  const data = await fetch(
    `https://qevent-backend.labs.crio.do/events/${params.eventid}`
  );
  const eventDetails = await data.json();
  return (
    <div className="h-[calc(100vh-3.75rem)] p-4 my-4 mx-16 text-black">
      <div className="flex justify-center">
        <img src={eventDetails.image} />
      </div>
      <h1 className="text-4xl font-bold">{eventDetails.name}</h1>
      <h2 className="font-bold">{eventDetails.location}</h2>
      <h2 className="font-bold">{eventDetails.artist}</h2>
      <div className="mt-20">
        <div className="flex gap-4 items-center mb-5">
          {eventDetails.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque
          placeat architecto dolorem inventore ex eius recusandae quod
          perspiciatis voluptatum maxime porro soluta repellat tempore
          accusamus. Incidunt, iure laborum? Modi odio possimus dicta sapiente
          neque tempora corporis recusandae nostrum et, ipsam omnis laudantium
          sequi, hic dolore pariatur ad commodi autem. Consectetur similique
          quam deleniti, nobis ullam error quisquam ipsam culpa! Quaerat, enim
          dolor reprehenderit excepturi esse sit aspernatur non odit aliquid
          sunt nam in debitis consequatur blanditiis hic nostrum odio laudantium
          eum numquam magni veniam inventore nesciunt minus harum? Tempore
          dignissimos est impedit velit esse odit tenetur ratione laudantium
          quia!
        </p>
        <h3 className="text-2xl font-bold">${eventDetails.price}</h3>
      </div>
      <div className="mt-10 flex items-center justify-end">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
