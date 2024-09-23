import { useEffect, useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import './App.css'

function App() {

  const [box1, setBox1] = useState('');
  const [box2, setBox2] = useState('');
  const [box3, setBox3] = useState('');
  const [box4, setBox4] = useState('');
  const [box5, setBox5] = useState('');
  const [box6, setBox6] = useState('');
  const [box7, setBox7] = useState('');
  const [box8, setBox8] = useState('');
  const [box9, setBox9] = useState('');
  const [click, setClick] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [draw, setDraw] = useState(false);
  const [win, setWin] = useState(false);
  const [winner, setWinner] = useState('');
  const [dificult, setDeficult] = useState('e');
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);
  const [colored , setColored] = useState(false);


  // console.log('1: %s 2: %s 3: %s 4: %s 5: %s 6: %s 7: %s 8: %s 9 :%s', box1, box2, box3, box4, box5, box6, box7, box8, box9);
  // console.log('draw:', draw);
  // console.log('win:', win);
  // console.log('winner:', winner);
  console.log('Deficult', dificult);
  const selection = (box, selector) => {
    switch (box) {
      case 1:
        box1 === '' ? setBox1(selector):'';
        break;
      case 2:
        box2 === '' ? setBox2(selector):'';
        break;
      case 3:
        box3 === '' ? setBox3(selector):'';
        break;
      case 4:
        box4 === '' ? setBox4(selector):'';
        break;
      case 5:
        box5 === '' ? setBox5(selector):'';
        break;
      case 6:
        box6 === '' ? setBox6(selector):'';
        break;
      case 7:
        box7 === '' ? setBox7(selector):'';
        break;
      case 8:
        box8 === '' ? setBox8(selector):'';
        break;
      case 9:
        box9 === '' ? setBox9(selector):'';
        break;
    }

    if (selector === 'c') {
      setClick(false);
    }
  }


  useEffect(() => {
    setProcessing(true);

    if (!(box1 === '' || box2 === '' || box3 === '' || box4 === '' || box5 === '' || box6 === '' || box7 === '' || box8 === '' || box9 === '')) {
      setDraw(true);
    }
    if (box1 !== '' || box2 !== '' || box3 !== '' || box4 !== '' || box5 !== '' || box6 !== '' || box7 !== '' || box8 !== '' || box9 !== '') {
      setStarted(true);
    }

    checkWin();

    if (click && !draw && !win) {
      if (dificult === 'e') {
        randomSelect();
      } else if (dificult === 'm') {
        box1 === 'u' && box2 === 'u' && box3 === '' ? selection(3, 'c') :
          box1 === 'u' && box3 === 'u' && box2 === '' ? selection(2, 'c') :
            box2 === 'u' && box3 === 'u' && box1 === '' ? selection(1, 'c') :
              box4 === 'u' && box5 === 'u' && box6 === '' ? selection(6, 'c') :
                box4 === 'u' && box6 === 'u' && box5 === '' ? selection(5, 'c') :
                  box5 === 'u' && box6 === 'u' && box4 === '' ? selection(4, 'c') :
                    box7 === 'u' && box8 === 'u' && box9 === '' ? selection(9, 'c') :
                      box7 === 'u' && box9 === 'u' && box8 === '' ? selection(8, 'c') :
                        box8 === 'u' && box9 === 'u' && box7 === '' ? selection(7, 'c') :
                          box1 === 'u' && box4 === 'u' && box7 === '' ? selection(7, 'c') :
                            box1 === 'u' && box7 === 'u' && box4 === '' ? selection(4, 'c') :
                              box4 === 'u' && box7 === 'u' && box1 === '' ? selection(1, 'c') :
                                box2 === 'u' && box5 === 'u' && box8 === '' ? selection(8, 'c') :
                                  box2 === 'u' && box8 === 'u' && box5 === '' ? selection(5, 'c') :
                                    box5 === 'u' && box8 === 'u' && box2 === '' ? selection(2, 'c') :
                                      box3 === 'u' && box6 === 'u' && box9 === '' ? selection(9, 'c') :
                                        box3 === 'u' && box9 === 'u' && box6 === '' ? selection(6, 'c') :
                                          box6 === 'u' && box9 === 'u' && box3 === '' ? selection(3, 'c') :
                                            box1 === 'u' && box5 === 'u' && box9 === '' ? selection(9, 'c') :
                                              box1 === 'u' && box9 === 'u' && box5 === '' ? selection(5, 'c') :
                                                box5 === 'u' && box9 === 'u' && box1 === '' ? selection(1, 'c') :
                                                  box7 === 'u' && box5 === 'u' && box3 === '' ? selection(3, 'c') :
                                                    box7 === 'u' && box3 === 'u' && box5 === '' ? selection(5, 'c') :
                                                      box5 === 'u' && box3 === 'u' && box7 === '' ? selection(7, 'c') :
                                                        randomSelect();
      } else if (dificult === 'h') {
        box1 === 'c' && box2 === 'c' && box3 === '' ? selection(3, 'c') :
          box1 === 'c' && box3 === 'c' && box2 === '' ? selection(2, 'c') :
            box2 === 'c' && box3 === 'c' && box1 === '' ? selection(1, 'c') :
              box4 === 'c' && box5 === 'c' && box6 === '' ? selection(6, 'c') :
                box4 === 'c' && box6 === 'c' && box5 === '' ? selection(5, 'c') :
                  box5 === 'c' && box6 === 'c' && box4 === '' ? selection(4, 'c') :
                    box7 === 'c' && box8 === 'c' && box9 === '' ? selection(9, 'c') :
                      box7 === 'c' && box9 === 'c' && box8 === '' ? selection(8, 'c') :
                        box8 === 'c' && box9 === 'c' && box7 === '' ? selection(7, 'c') :
                          box1 === 'c' && box4 === 'c' && box7 === '' ? selection(7, 'c') :
                            box1 === 'c' && box7 === 'c' && box4 === '' ? selection(4, 'c') :
                              box4 === 'c' && box7 === 'c' && box1 === '' ? selection(1, 'c') :
                                box2 === 'c' && box5 === 'c' && box8 === '' ? selection(8, 'c') :
                                  box2 === 'c' && box8 === 'c' && box5 === '' ? selection(5, 'c') :
                                    box5 === 'c' && box8 === 'c' && box2 === '' ? selection(2, 'c') :
                                      box3 === 'c' && box6 === 'c' && box9 === '' ? selection(9, 'c') :
                                        box3 === 'c' && box9 === 'c' && box6 === '' ? selection(6, 'c') :
                                          box6 === 'c' && box9 === 'c' && box3 === '' ? selection(3, 'c') :
                                            box1 === 'c' && box5 === 'c' && box9 === '' ? selection(9, 'c') :
                                              box1 === 'c' && box9 === 'c' && box5 === '' ? selection(5, 'c') :
                                                box5 === 'c' && box9 === 'c' && box1 === '' ? selection(1, 'c') :
                                                  box7 === 'c' && box5 === 'c' && box3 === '' ? selection(3, 'c') :
                                                    box7 === 'c' && box3 === 'c' && box5 === '' ? selection(5, 'c') :
                                                      box5 === 'c' && box3 === 'c' && box7 === '' ? selection(7, 'c') :
                                                        box1 === 'u' && box2 === 'u' && box3 === '' ? selection(3, 'c') :
                                                          box1 === 'u' && box3 === 'u' && box2 === '' ? selection(2, 'c') :
                                                            box2 === 'u' && box3 === 'u' && box1 === '' ? selection(1, 'c') :
                                                              box4 === 'u' && box5 === 'u' && box6 === '' ? selection(6, 'c') :
                                                                box4 === 'u' && box6 === 'u' && box5 === '' ? selection(5, 'c') :
                                                                  box5 === 'u' && box6 === 'u' && box4 === '' ? selection(4, 'c') :
                                                                    box7 === 'u' && box8 === 'u' && box9 === '' ? selection(9, 'c') :
                                                                      box7 === 'u' && box9 === 'u' && box8 === '' ? selection(8, 'c') :
                                                                        box8 === 'u' && box9 === 'u' && box7 === '' ? selection(7, 'c') :
                                                                          box1 === 'u' && box4 === 'u' && box7 === '' ? selection(7, 'c') :
                                                                            box1 === 'u' && box7 === 'u' && box4 === '' ? selection(4, 'c') :
                                                                              box4 === 'u' && box7 === 'u' && box1 === '' ? selection(1, 'c') :
                                                                                box2 === 'u' && box5 === 'u' && box8 === '' ? selection(8, 'c') :
                                                                                  box2 === 'u' && box8 === 'u' && box5 === '' ? selection(5, 'c') :
                                                                                    box5 === 'u' && box8 === 'u' && box2 === '' ? selection(2, 'c') :
                                                                                      box3 === 'u' && box6 === 'u' && box9 === '' ? selection(9, 'c') :
                                                                                        box3 === 'u' && box9 === 'u' && box6 === '' ? selection(6, 'c') :
                                                                                          box6 === 'u' && box9 === 'u' && box3 === '' ? selection(3, 'c') :
                                                                                            box1 === 'u' && box5 === 'u' && box9 === '' ? selection(9, 'c') :
                                                                                              box1 === 'u' && box9 === 'u' && box5 === '' ? selection(5, 'c') :
                                                                                                box5 === 'u' && box9 === 'u' && box1 === '' ? selection(1, 'c') :
                                                                                                  box7 === 'u' && box5 === 'u' && box3 === '' ? selection(3, 'c') :
                                                                                                    box7 === 'u' && box3 === 'u' && box5 === '' ? selection(5, 'c') :
                                                                                                      box5 === 'u' && box3 === 'u' && box7 === '' ? selection(7, 'c') :
                                                                                                        randomSelect();
      } else {
        setError(true);
      }

    }
    setProcessing(false);
  }, [box1, box2, box3, box4, box5, box6, box7, box8, box9]
  );


  const checkWin = () => {
    if (
      box1 === 'u' && box2 === 'u' && box3 === 'u' ||
      box4 === 'u' && box5 === 'u' && box6 === 'u' ||
      box7 === 'u' && box8 === 'u' && box9 === 'u' ||
      box1 === 'u' && box4 === 'u' && box7 === 'u' ||
      box2 === 'u' && box5 === 'u' && box8 === 'u' ||
      box3 === 'u' && box6 === 'u' && box9 === 'u' ||
      box1 === 'u' && box5 === 'u' && box9 === 'u' ||
      box7 === 'u' && box5 === 'u' && box3 === 'u'
    ) {
      setWin(true);
      setWinner('u');
    }

    if (
      box1 === 'c' && box2 === 'c' && box3 === 'c' ||
      box4 === 'c' && box5 === 'c' && box6 === 'c' ||
      box7 === 'c' && box8 === 'c' && box9 === 'c' ||
      box1 === 'c' && box4 === 'c' && box7 === 'c' ||
      box2 === 'c' && box5 === 'c' && box8 === 'c' ||
      box3 === 'c' && box6 === 'c' && box9 === 'c' ||
      box1 === 'c' && box5 === 'c' && box9 === 'c' ||
      box7 === 'c' && box5 === 'c' && box3 === 'c'
    ) {
      setWin(true);
      setWinner('c');
    }
  }


  const randomSelect = () => {
    try {
      const randomNo = Math.floor(Math.random() * 9) + 1;


      switch (randomNo) {
        case 1:
          if (box1 === '') { selection(1, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 2:
          if (box2 === '') { selection(2, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 3:
          if (box3 === '') { selection(3, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 4:
          if (box4 === '') { selection(4, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 5:
          if (box5 === '') { selection(5, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 6:
          if (box6 === '') { selection(6, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 7:
          if (box7 === '') { selection(7, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 8:
          if (box8 === '') { selection(8, 'c'); setClick(false); } else { randomSelect(); };
          break;
        case 9:
          if (box9 === '') { selection(9, 'c'); setClick(false); } else { randomSelect(); };
          break;
        default:
          setDraw(true);
          break;
      }
    } catch {
      setDraw(true);
    }

  }



  return (
    <>
      <div className='flex gap-5 items-center justify-center flex-col mt-2 w-[100%] h-[100vh]'>
        <div className='relative mb-5 top-[-5rem]'>
          <h1 className='text-[5rem]'>Tik Tac Toe</h1>
        </div>
        <div className='flex flex-row  gap-5 mb-4'>
          <span>Set Dificult Mode:     </span>
          <select disabled={started} onChange={(evevnt) => (setDeficult(evevnt.target.value))}>
            <option value="e">Easy</option>
            <option value="m">Medium</option>
            <option value="h">Hard</option>
          </select>
          <div className='flex gap-2 items-center justify-center'>
            <span>Colored:</span>
            <label class="relative inline-block w-[40px] h-[20px]">
              <input type="checkbox" checked={colored} onClick={()=>(setColored(!colored))} class="opacity-0 w-0 h-0 peer" />
              <span class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-400  peer-checked:bg-blue-500"></span>
              <span class="absolute content-none h-[20px] w-[20px] left-[0px] bottom-[0px] bg-white rounded-full transition-transform duration-400 peer-checked:transform peer-checked:translate-x-[20px]"></span>
            </label>
          </div>
        </div>
        <div className={` flex flex-col w-[300px] h-[300px] border ${processing || win || draw ? ' aria-readonly cursor-wait' : ''}`}>
          <div className='flex w-full h-[100px] border-b  '>
            <div className={` flex w-[100px] h-full border-r ${box1 !== '' || win || draw ? 'aria-readonly' : 'boxhover'} justify-center items-center `} onClick={() => (selection(1, 'u'), setClick(true))}>
              {box1 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box1 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' }/> : <></>}
            </div>
            <div className={` flex w-[100px] h-full border-r ${box2 !== '' || win || draw ? ' aria-readonly' : 'boxhover'} justify-center items-center `} onClick={() => (selection(2, 'u'), setClick(true))}>
              {box2 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box2 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
            <div className={`flex w-[100px] h-full  justify-center items-center ${box3 !== '' || win || draw ? ' aria-readonly' : 'boxhover'}`} onClick={() => (selection(3, 'u'), setClick(true))}>
              {box3 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box3 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
          </div>
          <div className='flex w-full h-[100px] border-b  '>
            <div className={` flex w-[100px] h-full border-r ${box4 !== '' || win || draw ? ' aria-readonly' : 'boxhover'} justify-center items-center `} onClick={() => (selection(4, 'u'), setClick(true))}>
              {box4 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box4 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
            <div className={` flex w-[100px] h-full border-r ${box5 !== '' || win || draw ? ' aria-readonly' : 'boxhover'} justify-center items-center `} onClick={() => (selection(5, 'u'), setClick(true))}>
              {box5 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box5 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
            <div className={`flex w-[100px] h-full  justify-center items-center ${box6 !== '' || win || draw ? ' aria-readonly' : 'boxhover'}`} onClick={() => (selection(6, 'u'), setClick(true))}>
              {box6 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box6 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
          </div>
          <div className='flex w-full h-[100px] '>
            <div className={` flex w-[100px] h-full border-r ${box7 !== '' || win || draw ? ' aria-readonly' : 'boxhover'} justify-center items-center `} onClick={() => (selection(7, 'u'), setClick(true))}>
              {box7 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box7 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
            <div className={` flex w-[100px] h-full border-r ${box8 !== '' || win || draw ? ' aria-readonly' : 'boxhover'} justify-center items-center `} onClick={() => (selection(8, 'u'), setClick(true))}>
              {box8 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box8 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
            <div className={`flex w-[100px] h-full justify-center items-center ${box9 !== '' || win || draw ? ' aria-readonly' : 'boxhover'}`} onClick={() => (selection(9, 'u'), setClick(true))}>
              {box9 === 'u' ? <RxCross2 size={60} color={colored? 'blue':''} /> : box9 === 'c' ? <FaRegCircle size={60} color={colored?'red':'' } /> : <></>}
            </div>
          </div>
        </div>
        <div className='flex gap-5 justify-center items-center'>
          {win ?
            <span>{winner === 'u' ? 'You' : 'Computer'} Win!</span>
            :
            win && draw ?
              <span>{winner === 'u' ? 'You' : 'Computer'} Win!</span>
              :
              draw ?
                <span>Game Draw!</span>
                :
                ''
          }
          {
            (win || draw) &&
            <div>
              <button onClick={() => (location.reload())} className='border border-l-sky-50 px-5 py-1 rounded-full transition-all ease-in-out hover:bg-slate-50 hover:text-zinc-800'>Play Again</button>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default App
