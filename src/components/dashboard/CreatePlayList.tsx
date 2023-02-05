import React, { useState } from "react";

const CreatePlayList = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-danger d-block mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
       Create New Playlist
      </button>

      <div
        className="modal fade"
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
              {/* <button type="button" className="btn btn-outline-primary">
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <form method="post">
              <div className="modal-body">
                <div className="form-group my-3">
                  <label htmlFor="title">Title</label>
                  <input
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
                    className="form-control"
                    id="description"
                    name="description"
                    aria-describedby="nameHelp"
                    placeholder="Enter Description"
                  />
                </div>
                
                
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePlayList;
