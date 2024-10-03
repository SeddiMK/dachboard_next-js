import TimeOffBodyTop from '../time-off-body-top'
import Cards from '../cards'
import DeyOfStick from '../dey-of-stick'
import IndependenceDay from '../independence-day'
import HistoryTable from '../history-table'

export default function TimeOff() {
	return (
		<section className='time-off-body border-b-black rounded-b-xl border-x-black border-2 bg-[#FCFCFE]'>
			<div className='wrapper px-4'>
				<TimeOffBodyTop />
				<Cards />
				<DeyOfStick />
				<IndependenceDay />
				<HistoryTable />
			</div>
		</section>
	)
}
