import React from "react";

const Footers = () => {
  return (
    <div className=" h-60px bg-[#376b95]">
      <div>
        <h2 className=" text-center text-2xl text-white my-2">Contacts</h2>
        <div className="flex  justify-around">
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/ankit-yadav-91264a257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <img
                src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n"
                alt="Linkedin"
                className="rounded-lg w-[40px] h-[40px]"
              />
              <h2 className="text-white mt-2">Ankit Yadav</h2>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://github.com/Code-o-pathy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <img
                src="https://imgs.search.brave.com/vCx7ZyLAR2QApPtYnNdDo0MxAg_7gVADEIKb_YZ-0XQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzM2LzU5LzIw/LzM2MF9GXzEwMzY1/OTIwMDRfSFFER2Zj/QmsycGZUQW1HRnlH/YUFOd3lmOTl2ajFv/Z2MuanBn"
                alt="githubLogo"
                className="rounded-lg w-[40px] h-[40px]"
              />
              <h2 className="text-white mt-2 ">Code-o-pathy</h2>
            </a>
          </div>
          <div className="flex">
            <a
              href="https://leetcode.com/u/theankityadav1907/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <img
                src="https://imgs.search.brave.com/sTMGxSIjcVpkwdFzPo78OgHzwDDQCi5V-SBQNC6I_10/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1oYXZlLWJlZW4t/bGVldGNvZGluZy1m/b3ItYS13aGlsZS1i/dXQtd2hhdC1kb2Vz/LXRoZS12MC11Y3k5/cTd3NDB3dGMxLmpw/Zz93aWR0aD03MjAm/Zm9ybWF0PXBqcGcm/YXV0bz13ZWJwJnM9/NDFlMTFhNTVmYWY4/NmUwYjdiYmJkZGY5/MzRiOTA2MjEyY2Fh/MGZhOQ"
                alt="leetcodeLogo"
                className="rounded-lg  w-[40px] h-[40px]"
              />
              <h2 className="mt-2  text-white">theankityadav1907</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
