import IndexFramer from '@/framer/index';

export default function Index() {
	return (
		<div>
			<IndexFramer.Responsive
				style={{ width: '100%', background: '#000000' }}
				variants={{
					xl: 'Desktop',
					md: 'Tablet',
					sm: 'Phone',
				}}
			/>
		</div>
	);
}

Index.description = 'Open-Source Multiplayer Tooling. A Single Tool to Manage Your Game Servers & Backend.';
Index.prose = false;
Index.fullWidth = true;

