import React from "react";
import gpuImage from "../../assests/gpu.jpg";
import cpuImage from "../../assests/cpu.jpg";
import ramImage from "../../assests/ram.jpg";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 p-0">
          <img className="gpu img-fluid" src={gpuImage} alt="gpu" />
        </div>
        <div className="col-lg-6 p-5 d-flex align-items-center">
            A graphics processing unit (GPU), also called a graphic-card or
            video-card is a specialized electronic circuit initially designed to
            accelerate computer graphics and image processing (either on a video
            card or embedded on motherboards, mobile phones, personal computers,
            workstations, and game consoles). After their initial design, GPUs
            were found to be useful for non-graphic calculations involving
            embarrassingly parallel problems due to their parallel structure.
            Other non-graphical uses include the training of neural networks and
            cryptocurrency mining.
        </div>
      </div>

      <div className="row flex-row-reverse cpu-container">
        <div className="col-lg-6 p-0">
          <img className="cpu img-fluid" src={cpuImage} alt="gpu" />
        </div>
        <div className="col-lg-6 p-5 d-flex align-items-center">
            A central processing unit (CPU), also called a central processor,
            main processor or just processor, is the electronic circuitry that
            executes instructions comprising a computer program. The CPU
            performs basic arithmetic, logic, controlling, and input/output
            (I/O) operations specified by the instructions in the program.The
            CPU controls the system data transfers via the data and address
            buses and additional control lines. A clock circuit, usually
            containing a crystal oscillator (as found in digital watches), is
            required; this produces a precise fixed frequency signal that drives
            the microprocessor along. The CPU operations are triggered on the
            rising and falling edges of the clock signal, allowing their exact
            timing to be defined. This allows events in the CPU to be completed
            in the correct sequence, with sufficient time allowed for each step.
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 p-0">
          <img className="ram img-fluid" src={ramImage} alt="ram" />
        </div>

        <div className="col-lg-6 p-5 d-flex align-items-center">
          Random-access memory (RAM; /ræm/) is a form of electronic computer
          memory that can be read and changed in any order, typically used to
          store working data and machine code. A random-access memory device
          allows data items to be read or written in almost the same amount of
          time irrespective of the physical location of data inside the memory,
          in contrast with other direct-access data storage media (such as hard
          disks, CD-RWs, DVD-RWs), where the time required to read and write
          data items varies significantly depending on their physical locations
          on the recording medium, due to mechanical limitations such as media
          rotation speeds and arm movement. RAM contains multiplexing and
          demultiplexing circuitry, to connect the data lines to the addressed
          storage for reading or writing the entry.
        </div>
      </div>
    </div>
  );
};

export default Home;
