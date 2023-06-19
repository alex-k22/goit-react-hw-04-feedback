import PropTypes from 'prop-types';
import css from './Section.module.css'

const Section = ({title, children}) => {
    return (
        <section className={css.section}>
          <h2 className={css.header}>{title}</h2>
          {children}
        </section>
      );
    };

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
}

export default Section;