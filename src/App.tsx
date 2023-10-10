/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import data from './data';

function App() {
  const [read, setRead] = useState(true);
  return (
    <div className=" bg-snow flex h-screen w-full justify-center align-middle">
      <div className="md:card-shadow my-auto h-screen w-full overflow-y-auto rounded-2xl bg-white px-10 py-5 md:h-5/6 md:w-9/12 lg:w-7/12">
        <div className="flex justify-between pb-6 pt-3.5">
          <div className="flex">
            <h1 className="text-darkText pr-3 text-2xl font-bold">
              Notifications
            </h1>
            <div className="bg-blue mt-1 h-[25px] w-8 rounded-md text-center text-base font-bold text-white">
              <p>3</p>
            </div>
          </div>
          <button
            type="button"
            className="hover:text-blue text-greyText"
            onClick={() => setRead(false)}
          >
            Mark all as read
          </button>
        </div>
        <div>
          {data.map((item, id) => {
            return (
              <div
                key={`${item.name}${id}`}
                className="text-text bg-snow my-2.5 flex justify-between rounded-lg p-5 text-base"
              >
                <div className="flex">
                  <div className="mr-5 flex-none">
                    <img
                      className="w-10 md:w-11"
                      src={item.picture}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap">
                      <p>
                        <span className="text-darkText pr-2 font-bold">
                          {item.name}
                        </span>
                        {item?.action}
                        <span className="px-2">
                          <a href="#" className="text-blue font-bold">
                            {item?.link}
                          </a>
                        </span>
                        {read ? (
                          <svg
                            className="mt-[-2px] inline-block"
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="4" cy="4" r="4" fill="#F65552" />
                          </svg>
                        ) : null}
                      </p>
                    </div>
                    <p className="text-greyText">{item.date}</p>
                    {item?.child ? (
                      <div className="border-borderGrey hover:bg-hoverBlue my-3 rounded-[5px] border p-4 hover:cursor-pointer">
                        <p>{item?.child}</p>
                      </div>
                    ) : null}
                  </div>
                </div>

                {item?.profilePic ? (
                  <button type="button">
                    <img
                      src={item?.profilePic}
                      alt={item.name}
                      className="w-10 md:w-11"
                    />
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
