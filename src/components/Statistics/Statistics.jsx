import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
} from './Statistics.styled';

export default function Statistics({ title, stats, fn }) {
  return (
    <StatisticsSection>
      <Title>{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: `${fn()}` }}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  fn: PropTypes.func,
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
