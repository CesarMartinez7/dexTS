import { useQuery, gql } from "@apollo/client";
import React, { useRef, useState } from "react";
import { Manga } from "../Types/Peticion";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const GET_MANGA = gql`
  query GetMedia($page: Int, $perPage: Int, $search: String, $type: MediaType) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
        perPage
      }
      media(search: $search, type: $type) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        chapters
        genres
        description
        coverImage {
          medium
        }
        bannerImage
      }
    }
  }
`;

export default function MangaList() {
    const navigate = useNavigate(null)
  const searchInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>();
  const { loading, error, data } = useQuery(GET_MANGA, {
    variables: {
      page: 1,
      perPage: 10,
      search: query,
      type: "MANGA", 
    },
  });

  const handleSubmit = (event : React.FormEvent): void => {
    event.preventDefault()
    if(searchInput.current){
        setQuery(searchInput.current?.value)
    }
    
  }

  if (loading) return <Loading />;
  if (error) return <div>Errror</div>;
  return (
    <div className="p-10">
      <form
        onSubmit={(e) => {
            handleSubmit(e)
        }}
      >
        <input
        ref={searchInput}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </form>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {data.Page.media.map((item: Manga, index : number) => (
          <li onClick={() => {
            navigate(`/manga/${item.id}`)
          }}>
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>
            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {index + 1}
              </div>
              <div>
                <img
                  className="size-10 rounded-box"
                  src={item.coverImage.medium}
                />
              </div>
              <div className="list-col-grow">
                <div>{item.title.romaji}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Remaining Reason
                </div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
}
