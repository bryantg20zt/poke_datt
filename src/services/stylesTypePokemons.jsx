import { GiPunch, GiPoisonGas, GiStoneSphere, GiFairyWand } from 'react-icons/gi'
import { SiFlyway } from 'react-icons/si'
import { MdTerrain, MdOutlineWater, MdOutlineGrass, MdElectricBolt, MdDarkMode } from 'react-icons/md'
import { FaBug, FaGhost, FaFire, FaRegSnowflake, FaDragon, FaDna } from 'react-icons/fa'
import { IoRadioSharp } from 'react-icons/io5'
import { FaCircleQuestion } from 'react-icons/fa6'
import { TbInnerShadowTopRightFilled } from 'react-icons/tb'
import { IoIosCube } from 'react-icons/io'

export const pokemonTypes = [
  {
    name: 'normal',
    color: '#000',
    background: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
    icon: <FaDna />
  },
  {
    name: 'fighting',
    color: '#fff',
    background: 'linear-gradient(to top, #f77062 0%, #fe5196 100%)',
    icon: <GiPunch />
  },
  {
    name: 'flying',
    color: '#fff',
    background: 'linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)',
    icon: <SiFlyway />
  },
  {
    name: 'poison',
    color: '#fff',
    background: 'linear-gradient(to top, #e8198b 0%, #c7eafd 100%)',
    icon: <GiPoisonGas />
  },
  {
    name: 'ground',
    color: '#fff',
    background: 'linear-gradient(to top, #e6b980 0%, #eacda3 100%)',
    icon: <MdTerrain />
  },
  {
    name: 'rock',
    color: '#fff',
    background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
    icon: <GiStoneSphere />
  },
  {
    name: 'bug',
    color: '#000',
    background: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
    icon: <FaBug />
  },
  {
    name: 'ghost',
    color: '#fff',
    background: 'linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)',
    icon: <FaGhost />
  },
  {
    name: 'steel',
    color: '#000',
    background: 'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
    icon: <IoIosCube />
  },
  {
    name: 'fire',
    color: '#fff',
    background: 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',
    icon: <FaFire />
  },
  {
    name: 'water',
    color: '#fff',
    background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    icon: <MdOutlineWater />
  },
  {
    name: 'grass',
    color: '#fff',
    background: 'linear-gradient(to top, #9be15d 0%, #00e3ae 100%)',
    icon: <MdOutlineGrass />
  },
  {
    name: 'electric',
    color: '#000',
    background: 'linear-gradient(315deg, #FFFAE5, #FEFF01)',
    icon: <MdElectricBolt />
  },
  {
    name: 'psychic',
    color: '#fff',
    background: 'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',
    icon: <IoRadioSharp />
  },
  {
    name: 'ice',
    color: '#fff',
    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    icon: <FaRegSnowflake />
  },
  {
    name: 'dragon',
    color: '#fff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: <FaDragon />
  },
  {
    name: 'dark',
    color: '#fff',
    background: 'linear-gradient(to right, #434343 0%, black 100%)',
    icon: <MdDarkMode />
  },
  {
    name: 'fairy',
    color: '#fff',
    background: 'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)',
    icon: <GiFairyWand />
  },
  {
    name: 'unknown',
    color: '#fff',
    background: 'linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)',
    icon: <FaCircleQuestion />
  },
  {
    name: 'shadow',
    color: '#fff',
    background: 'linear-gradient(-20deg, #d558c8 0%, #24d292 100%)',
    icon: <TbInnerShadowTopRightFilled />
  }
]
