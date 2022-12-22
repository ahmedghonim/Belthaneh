import Home from 'svg/home.svg'
import Calender from 'svg/calender.svg'
import Scan from 'svg/scan.svg'
import Store from 'svg/store.svg'
import Paper from 'svg/paper.svg'
import Boxes from 'svg/boxes.svg'
import Discover from 'svg/discover.svg'
import Chart from 'svg/chart.svg'
import Users from 'svg/users.svg'

const permissions = [
  {
    id: '0',
    name: 'dashboard',
    icon: <Home className={'fill-dark-100 dark:fill-white'} />,
    currentAccess: 'full',
    status: true,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '1',
    name: 'booking',
    icon: <Calender className={'fill-dark-100 dark:fill-white'} />,
    currentAccess: 'view',
    status: true,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '2',
    name: 'pos',
    icon: <Scan className={'stroke-dark-100 dark:stroke-white'} />,
    currentAccess: 'view',
    status: false,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '3',
    name: 'store',
    icon: <Store className={'fill-dark-100 dark:fill-white'} />,
    currentAccess: 'view',
    status: false,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '4',
    name: 'accounting',
    icon: <Paper className={'stroke-dark-100 dark:stroke-white'} />,
    currentAccess: 'view',
    status: false,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '5',
    name: 'workplace',
    icon: <Boxes className={'stroke-dark-100 dark:stroke-white'} />,
    currentAccess: 'view',
    status: false,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '6',
    name: 'clients',
    icon: <Users className={'fill-dark-100 dark:fill-white'} />,
    currentAccess: 'view',
    status: false,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '7',
    name: 'online',
    icon: <Discover className={'stroke-dark-100 dark:stroke-white'} />,
    currentAccess: 'view',
    status: false,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  },
  {
    id: '8',
    name: 'reports',
    icon: <Chart className={'stroke-dark-100 dark:stroke-white'} />,
    currentAccess: 'full',
    status: true,
    handleChangeStatus: () => undefined,
    handleChangeAccess: () => undefined
  }
]

export default permissions
