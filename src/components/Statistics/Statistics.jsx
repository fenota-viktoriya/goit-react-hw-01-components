import s from './Statistics.module.css';

import PropTypes from 'prop-types';


export default function Statistics({ title, stats, fn}) {
    return(<section className={`${s.statistics}`}>
        {title && <h2 className={`${s.title}`}>{title}</h2>}     
  <ul className={`${s.statlist}`}>
{stats.map(stat=>(
  <li className={`${s.item}`} key={stat.id} style={{backgroundColor:`${fn()}`}} >
      <span className={`${s.label}`}>
             {stat.label}</span>
      <span className={`${s.percentage}`}>{stat.percentage}%</span>
    </li> ))}
  </ul>
</section>)
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.array.isRequired,
}
