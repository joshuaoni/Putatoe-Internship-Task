import React from 'react';
import mobile from '../images/mobile.PNG';
import dth from '../images/dth.PNG';
import news from '../images/news.PNG';
import blog from '../images/blog.PNG';
import confess from '../images/confess.PNG';
import loan from '../images/recharge.PNG';
import promo from '../images/promo.PNG';
import feed from '../images/feedback.PNG';

const Menu = () => {
    return (
        <div className='menu'>
            <div className='flex'>
                <div className='imgl'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={mobile} /></div>
                    <h2>Mobile Recharge</h2>
                </div>
                <div className='img'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={dth} /></div>
                    <h2>Dth Recharge</h2>
                </div>
                <div className='img'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={loan} /></div>
                    <h2>Loans</h2>
                </div>
                <div className='imgr'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={promo} /></div>
                    <h2>Promotion</h2>
                </div>
            </div>
            <div className='flex'>
                <div className='imgl'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={news} /></div>
                    <h2>News</h2>
                </div>
                <div className='img'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={blog} /></div>
                    <h2>Blog</h2>
                </div>
                <div className='img'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={confess} /></div>
                    <h2>Confession</h2>
                </div>
                <div className='imgr'>
                    <div className='img-cont'><img alt='' height='120px' width='auto' src={feed} /></div>
                    <h2>Feedback</h2>
                </div>               
            </div>
        </div>
    );
}
 
export default Menu;