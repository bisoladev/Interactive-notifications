/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import data from './data';

function App() {
  const [read, setRead] = useState(true);
  return (
    <div className=" flex h-screen w-full justify-center bg-snow align-middle">
      <div className="md:card-shadow my-auto h-screen w-full overflow-y-auto rounded-2xl bg-white px-5 py-5 md:h-5/6 md:w-9/12 md:px-10 lg:w-7/12">
        <div className="flex justify-between pb-6 pt-3.5">
          <div className="flex">
            <h1 className="pr-3 text-lg font-bold text-darkText md:text-2xl">
              Notifications
            </h1>
            <div className="mt-1 h-[20px] w-6 rounded-md bg-blue text-center text-sm font-bold text-white md:h-[25px] md:w-8 md:text-base">
              <p>3</p>
            </div>
          </div>
          <button
            type="button"
            className="text-sm text-greyText hover:text-blue md:text-base"
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
                className="my-2.5 flex justify-between rounded-lg bg-snow p-5 text-base text-text"
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
                    <div className="flex flex-wrap text-sm md:text-base">
                      <p>
                        <span className="pr-2 font-bold text-darkText">
                          {item.name}
                        </span>
                        {item?.action}
                        <span className="px-2">
                          <a href="#" className="font-bold text-blue">
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
                      <div className="my-3 rounded-[5px] border border-borderGrey p-2 text-sm hover:cursor-pointer hover:bg-hoverBlue md:p-4 md:text-base">
                        <p>{item?.child}</p>
                      </div>
                    ) : null}
                  </div>
                </div>

                {item?.profilePic ? (
                  <button type="button" className="flex-none">
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
