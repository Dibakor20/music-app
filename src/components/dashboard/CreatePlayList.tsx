import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, AppThunk } from "../../store/store";
import { createPlayList } from "../../store/storeAction";

const CreatePlayList = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDesription] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleCreatePlaylist = () => {
    if (title.trim()) {
      const playlistData = {
        title: title.trim(),
        description,
        songs: [],
        id: Math.round(Math.random() * 9999999).toString(),
      };
      dispatch(createPlayList(playlistData));
      setTitle("");
      setDesription("");
      setOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn btn-danger d-block mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create New Playlist
      </button>
      {open && (
        <div
          className="modal d-block"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create New Playlist
                </h5>
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                {/* <button type="button" className="btn btn-outline-primary">
                      <span aria-hidden="true">&times;</span>
                    </button> */}
              </div>

              <div className="modal-body">
                <div className="form-group my-3">
                  <label htmlFor="title">Title</label>
                  <input
                    value={title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setTitle(e.target.value)
                    }
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="nameHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    value={description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setDesription(e.target.value)
                    }
                    className="form-control"
                    id="description"
                    name="description"
                    aria-describedby="nameHelp"
                    placeholder="Enter Description"
                  />
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <button
                  type="button"
                  onClick={handleCreatePlaylist}
                  className="btn btn-danger"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePlayList;
