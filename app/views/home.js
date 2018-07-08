import React from 'react';
import { translate } from 'focus-core/translation';

import Article from '@/components/article';
import Section from '@/components/article/section';

export default class extends React.Component {
    static displayName = 'HomeView';

    render() {
        const rules = translate('home.paragraphs.rules', { returnObjects: true })
            .map((rule, i) => {
                return <li key={i}>{rule}</li>;
            });
        const tmRules = translate('home.paragraphs.tmRules', { returnObjects: true })
            .map((handi, i) => {
                return <li key={i}>{handi}</li>;
            });
        // const handicapsT1 = translate('home.paragraphs.handicapsT1', { returnObjects: true })
        //     .map((handi, i) => {
        //         return <li key={i}>{handi}</li>;
        //     });
        // const handicapsT2 = translate('home.paragraphs.handicapsT2', { returnObjects: true })
        //     .map((handi, i) => {
        //         return <li key={i}>{handi}</li>;
        //     });

        return (
            <div data-app='home-page'>
                <Article>
                    <h1 className='display-1'>
                        {'Fight for '}<span className='green'>{'Sub'}</span>
                    </h1>
                    <Section title={translate('home.titles.whatIsIt')}>
                        <p>
                            {translate('home.paragraphs.game')}
                        </p>
                        <p>
                            {translate('home.paragraphs.sub')}
                        </p>
                    </Section>
                    <Section title={translate('home.titles.rules')}>
                        <h3 className='subheading title-blue'>
                            {translate('home.titles.basicRules')}
                        </h3>
                        <ul>
                            {rules}
                        </ul>
                        {/* <p className='warning-box'>
                            {translate('home.paragraphs.vocalWarning')}
                        </p> */}
                        <h3 className='subheading title-blue'>
                            {translate('home.titles.tmRules')}
                        </h3>
                        <div className='section-inner'>
                            <ul>
                                {tmRules}
                            </ul>
                        </div>
                        {/* <h3 className='subheading title-blue'>
                            {translate('home.titles.handicaps')}
                        </h3> */}
                        {/* <div className='section-inner'>
                            <h4 className='title title-green'>
                                {translate('home.titles.handicapT1')}
                            </h4>
                            <ul>
                                {handicapsT1}
                            </ul>
                            <h4 className='title title-green'>
                                {translate('home.titles.handicapT2')}
                            </h4>
                            <ul>
                                {handicapsT2}
                            </ul>
                        </div> */}
                    </Section>
                </Article>
            </div >
        );
    }
}
