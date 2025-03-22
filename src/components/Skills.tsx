import "./Skills.css";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiCsharp } from "react-icons/si";
import { SiAzuredevops } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div id="skills" className="">
        <div className="vcard d-flex flex-column m-2 p-5">
          <div className="d-flex flex-row">
            <h3>Technologies I do</h3>
          </div>
          <div className="d-flex flex-row">
            <p>
              Full stack developer specializing in C# .Net applications, with
              Bootstrap and React for UI implementation. Below is a quick
              overview of my main technical skill set, the tools, languages, and
              technologies I use.
            </p>
          </div>

          <div className="d-flex flex-row justify-content-around align-items-center ">
            <div className="p-4">
              <SiHtml5 className="m-1 p-1" size={75} />
              <SiCss3 className="m-1 p-1" size={75} />
              <SiBootstrap className="m-1 p-1" size={75} />
              <SiFigma className="m-1 p-1" size={75} />
              <SiJavascript className="m-1 p-1" size={75} />
              <SiReact className="m-1 p-1" size={75} />
              <SiGit className="m-1 p-1" size={75} />
              <SiAzuredevops className="m-1 p-1" size={75} />
              <SiDotnet className="m-1 p-1" size={75} />
              <SiMicrosoftsqlserver className="m-1 p-1" size={75} />
              <SiCsharp className="m-1 p-1" size={75} />
              <VscVscode className="m-1 p-1" size={75} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
