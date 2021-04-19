import {} from '@material-ui/core';
import logo from '../../assets/images/logo.png';
import face from '../../assets/images/arif.png';
import delivery from '../../assets/images/delivery.png';
import customer from '../../assets/images/customer.png';
import best from '../../assets/images/best.png';
import '../styles/About.css';

export default function About() {
	return (
		<>
			<div className={'aboutContainer'}>
				<div className={'mainContainer'}>
					<div className={'rightContainer'}>
						<div className={'logoContainer'}>
							<img src={logo} alt={'logoImg'} />
						</div>
						<div>
							<p>
								Arif system was founded by Arif Jubaer. The organization has
								developed this Automated complain management ticketing system to
								solve the cloud related issues fir their valuable clients. The
								complaints that are registered by our valuable clients are
								closely monitored by out Company's administration staff and
								whenever client register a camplaint, a Cloud enginer is
								apppointed for the particular client to slove the issue as soon
								as possible.
							</p>
							<h2>Why Choose Us?</h2>
						</div>
					</div>
					<div className={'leftContainer'}>
						<div className={'founderContainer'}>
							<img
								src={face}
								alt={'Photo of Arif Jubaer - Founber of Arif System'}
							/>
							<p>Arif Jubaer - Founber of Arif System</p>
						</div>
					</div>
				</div>
				<div className={'badgeContainer'}>
					<div>
						<img src={delivery} alt={''} className={'delivery'} />
					</div>
					<div>
						<img src={customer} alt={''} className={'customer'} />
					</div>
					<div>
						<img src={best} alt={''} className={'best'} />
					</div>
				</div>
			</div>
		</>
	);
}
