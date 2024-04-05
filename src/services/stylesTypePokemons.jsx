import { GiPunch, GiPoisonGas, GiStoneSphere, GiFairyWand } from 'react-icons/gi'
import { SiFlyway } from 'react-icons/si'
import { MdTerrain, MdOutlineWater, MdOutlineGrass, MdElectricBolt, MdDarkMode } from 'react-icons/md'
import { FaBug, FaGhost, FaFire, FaRegSnowflake, FaDragon, FaDna } from 'react-icons/fa'
import { IoRadioSharp } from 'react-icons/io5'
import { FaCircleQuestion, FaShield } from 'react-icons/fa6'
import { TbInnerShadowTopRightFilled, TbMedicalCrossFilled } from 'react-icons/tb'
import { IoIosCube, IoIosSpeedometer } from 'react-icons/io'

export const pokemonTypes = [
  {
    name: 'normal',
    color: '#000',
    background: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
    icon: <FaDna />,
    colorIcon: '#A8A77A' // Color normal
  },
  {
    name: 'fighting',
    color: '#fff',
    background: 'linear-gradient(to top, #f77062 0%, #fe5196 100%)',
    icon: <GiPunch />,
    colorIcon: '#C22E28' // Color lucha
  },
  {
    name: 'flying',
    color: '#fff',
    background: 'linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)',
    icon: <SiFlyway />,
    colorIcon: '#A98FF3' // Color volador
  },
  {
    name: 'poison',
    color: '#fff',
    background: 'linear-gradient(to top, #e8198b 0%, #c7eafd 100%)',
    icon: <GiPoisonGas />,
    colorIcon: '#A33EA1' // Color veneno
  },
  {
    name: 'ground',
    color: '#fff',
    background: 'linear-gradient(to top, #e6b980 0%, #eacda3 100%)',
    icon: <MdTerrain />,
    colorIcon: '#E2BF65' // Color tierra
  },
  {
    name: 'rock',
    color: '#fff',
    background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
    icon: <GiStoneSphere />,
    colorIcon: '#B6A136' // Color roca
  },
  {
    name: 'bug',
    color: '#000',
    background: 'linear-gradient(to top, #96fbc4 0%, #f9f586 100%)',
    icon: <FaBug />,
    colorIcon: '#A6B91A' // Color insecto
  },
  {
    name: 'ghost',
    color: '#fff',
    background: 'linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)',
    icon: <FaGhost />,
    colorIcon: '#735797' // Color fantasma
  },
  {
    name: 'steel',
    color: '#000',
    background: 'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
    icon: <IoIosCube />,
    colorIcon: '#B7B7CE' // Color acero
  },
  {
    name: 'fire',
    color: '#fff',
    background: 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',
    icon: <FaFire />,
    colorIcon: '#EE8130' // Color fuego
  },
  {
    name: 'water',
    color: '#fff',
    background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    icon: <MdOutlineWater />,
    colorIcon: '#6390F0' // Color agua
  },
  {
    name: 'grass',
    color: '#fff',
    background: 'linear-gradient(to top, #9be15d 0%, #00e3ae 100%)',
    icon: <MdOutlineGrass />,
    colorIcon: '#7AC74C' // Color hierba
  },
  {
    name: 'electric',
    color: '#000',
    background: 'linear-gradient(315deg, #FFFAE5, #FEFF01)',
    icon: <MdElectricBolt />,
    colorIcon: '#F7D02C' // Color eléctrico
  },
  {
    name: 'psychic',
    color: '#fff',
    background: 'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',
    icon: <IoRadioSharp />,
    colorIcon: '#F95587' // Color psíquico
  },
  {
    name: 'ice',
    color: '#fff',
    background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    icon: <FaRegSnowflake />,
    colorIcon: '#96D9D6' // Color hielo
  },
  {
    name: 'dragon',
    color: '#fff',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: <FaDragon />,
    colorIcon: '#6F35FC' // Color dragón
  },
  {
    name: 'dark',
    color: '#fff',
    background: 'linear-gradient(to right, #434343 0%, black 100%)',
    icon: <MdDarkMode />,
    colorIcon: '#705746' // Color oscuro
  },
  {
    name: 'fairy',
    color: '#fff',
    background: 'linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)',
    icon: <GiFairyWand />,
    colorIcon: '#D685AD' // Color hada
  },
  {
    name: 'unknown',
    color: '#fff',
    background: 'linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)',
    icon: <FaCircleQuestion />,
    colorIcon: '#6D6D4E' // Color desconocido
  },
  {
    name: 'shadow',
    color: '#fff',
    background: 'linear-gradient(-20deg, #d558c8 0%, #24d292 100%)',
    icon: <TbInnerShadowTopRightFilled />,
    colorIcon: '#000000' // Color sombra
  }
]

export const pokemonStats = [
  {
    name: 'hp',
    color: '#80ff80',
    icon: <TbMedicalCrossFilled style={{ color: '#80ff80' }} />
  },
  {
    name: 'attack',
    color: '#EE8130',
    icon: <GiPunch style={{ color: '#EE8130' }} />
  },
  {
    name: 'defense',
    color: '#F7D02C',
    icon: <FaShield style={{ color: '#F7D02C' }} />
  },
  {
    name: 'special-attack',
    color: '#F95587',
    icon: <GiPunch style={{ color: '#F95587' }} />
  },
  {
    name: 'special-defense',
    color: '#9B72E8',
    icon: <FaShield style={{ color: '#9B72E8' }} />
  },
  {
    name: 'speed',
    color: '#45A9F4',
    icon: <IoIosSpeedometer style={{ color: '#45A9F4' }} />
  }
]
