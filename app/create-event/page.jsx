"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MultiSelect } from "react-multi-select-component";
import { v4 as uuidv4 } from "uuid";

const CreateEvent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [artists, setArtists] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await fetch("https://qevent-backend.labs.crio.do/artists");
      const artists = await data.json();
      setArtists(artists);
    };

    const fetchTags = async () => {
      const data = await fetch("https://qevent-backend.labs.crio.do/tags");
      const tags = await data.json();
      setTags(
        tags.map((tag) => ({
          label: tag.name,
          value: tag.name,
        }))
      );
    };

    Promise.all([fetchArtists(), fetchTags()])
      .then(() => {
        console.log("Data fetched");
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    if (!session) {
      router.replace("/events");
    }
  }, []);

  const handleEventCreate = async (e) => {
    e.preventDefault();
    const payload = {
      id: uuidv4(),
      name: e.target.elements["name"].value,
      description: e.target.elements["description"].value,
      location: e.target.elements["location"].value,
      date: e.target.elements["date"].value,
      time: e.target.elements["time"].value,
      tags: selectedTags.map((tag) => tag.value),
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      artist: e.target.elements["artist"].value,
      price: e.target.elements["price"].value,
    };

    const data = await fetch("https://qevent-backend.labs.crio.do/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    await data.json();
    router.replace("/events");
  };

  return (
    <section className="h-[calc(100vh-3.75rem)] mt-10 p-4">
      <form
        className="flex flex-col gap-5 mt-10 max-w-[500px] text-black"
        onSubmit={handleEventCreate}
      >
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <textarea
        name="description"
          placeholder="Event Description"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <select
          name="artist"
          placeholder="Select Artist"
          className="bg-slate-300 text-black p-3"
        >
          <option value="" selected>
            Select Artist
          </option>
          {artists?.map((artist) => (
            <option value={artist.name}>{artist.name}</option>
          ))}
        </select>
        <MultiSelect
          options={tags}
          value={selectedTags}
          onChange={setSelectedTags}
          labelledBy="Select Tags"
          isLoading={!tags.length}
        />
        <input
          type="date"
          name="date"
          placeholder="Event Date"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="time"
          name="time"
          placeholder="Event Time"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          name="price"
          placeholder="Price (in $)"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
        >
          Create Event
        </button>
      </form>
    </section>
  );
};

export default CreateEvent;
