"use client";

import React, { useEffect, useRef, useState } from 'react';
import { DatabaseIcon, StackIcon, TreeStructureIcon, CoinsIcon, ChartBarIcon, HeadsetIcon, FactoryIcon, CpuIcon, ArrowRightIcon, XIcon, ListIcon } from '@phosphor-icons/react';

const topics = [
  { id:'data', label:'Data', icon:DatabaseIcon, position:[50,11], title:'Data & reporting', pain:'Conflicting reports', summary:'Bring the numbers together.', problem:'Different systems give different answers. Teams keep reconciling the same files.', approach:'Connect the sources behind one important report, agree the definitions and add checks for missing or inconsistent data.', inputs:'Spreadsheets, databases and the report your team uses today.', measures:'Preparation time, data freshness and reconciliation errors.', review:'Your team agrees the definitions and signs off the output.', service:'Data engineering & reporting' },
  { id:'design', label:'Design', icon:StackIcon, position:[84,30.5], title:'Design & engineering', pain:'Scattered knowledge', summary:'Find the right specification.', problem:'Requirements, manuals and previous decisions are spread across documents.', approach:'Make approved technical documents searchable, with answers linked to their sources and a checklist for specification changes.', inputs:'Approved specifications, manuals and questions your engineers ask.', measures:'Time to find an answer, source accuracy and corrections.', review:'Engineers retain approval of design and safety decisions.', service:'Engineering knowledge & applied AI' },
  { id:'process', label:'Process', icon:TreeStructureIcon, position:[84,69.5], title:'Process & quality', pain:'Delays', summary:'Find the bottleneck.', problem:'Recurring delays and rework are difficult to trace across separate production or service records.', approach:'Bring job status, delay reasons and quality records together; highlight recurring bottlenecks for the operations team to investigate.', inputs:'Job timestamps, delay reasons, quality records and process-owner feedback.', measures:'Cycle time, backlog age, rework and investigation effort.', review:'Process owners review findings and approve operational changes.', service:'Process analytics & workflow improvement' },
  { id:'cost', label:'Cost', icon:CoinsIcon, position:[50,89], title:'Cost & inventory', pain:'Unclear costs', summary:'See what drives the spend.', problem:'Excess stock, urgent purchases and rework add cost without a clear view of the drivers.', approach:'Connect inventory, demand and purchasing data for one product group; highlight excess, shortages and cost exceptions for review.', inputs:'Stock balances, demand history, purchases, lead times and planning rules.', measures:'Excess stock, stockouts, expedited orders and planning effort.', review:'Planners approve purchasing and transfer decisions.', service:'Inventory & cost analytics' },
  { id:'capacity', label:'Capacity', icon:ChartBarIcon, position:[16,69.5], title:'Workforce & capacity', pain:'Uneven workloads', summary:'Plan around real capacity.', problem:'Some teams are overloaded while other capacity goes unused.', approach:'Create a workload and capacity view for one team, with scenarios that expose coverage gaps and scheduling trade-offs.', inputs:'Demand, task durations, team availability and scheduling constraints.', measures:'Planning effort, unfilled coverage, overtime and service levels.', review:'Managers and their teams make the final staffing decisions.', service:'Workforce & capacity planning analytics' },
  { id:'support', label:'Support', icon:HeadsetIcon, position:[16,30.5], title:'Customer operations', pain:'Repeated queries', summary:'Find answers. Move work forward.', problem:'Staff repeatedly search for product information and route the same kinds of enquiry.', approach:'Connect approved knowledge to a workflow that categorises enquiries, prepares source-backed drafts and routes exceptions to a person.', inputs:'Product documentation, service policies and example enquiries.', measures:'Handling time, draft corrections, routing accuracy and unresolved enquiries.', review:'Your team approves customer-facing responses and sensitive cases.', service:'Knowledge assistants & workflow automation' },
];
const byId = Object.fromEntries(topics.map(t=>[t.id,t]));
const LegacySections=React.memo(function LegacySections({markup}) {
  return <div className="legacy-content" dangerouslySetInnerHTML={{__html:markup}}/>;
});
const Footer=React.memo(function Footer({markup}) {
  return <div dangerouslySetInnerHTML={{__html:markup}}/>;
});

export default function CircularHomepage({legacyMarkup,footerMarkup}) {
  const [selected,setSelected] = useState(null);
  const [approach,setApproach] = useState(null);
  const rootRef = useRef(null), dialogRef = useRef(null), openerRef = useRef(null), menuRef = useRef(null);
  const selectedTopic = selected ? byId[selected] : null;

  function updateEnquiry(value) {
    const root=rootRef.current, select=root.querySelector('#challenge-select'), email=root.querySelector('#challenge-email'), status=root.querySelector('#challenge-status');
    if(value!==undefined) select.value = value==='support'?'customer':value==='capacity'?'workforce':value;
    const id=select.value==='customer'?'support':select.value==='workforce'?'capacity':select.value;
    const label=byId[id]?.service || 'An opportunity to improve our data or operations';
    const body=`Hello Shivanand,\n\nI would like to discuss: ${label}.\n\nOur business / team:\nThe workflow we want to improve:\nOur current tools or data:\nWhat a useful result would look like:\n\nBest time to talk:\n`;
    email.href=`mailto:kumarshivanand7@gmail.com?subject=${encodeURIComponent('Project enquiry: '+label)}&body=${encodeURIComponent(body)}`;
    status.textContent=select.value?`Your email draft will include: ${label}.`:'Opens your email app with a few prompts to describe the challenge.';
  }
  function jump(id) {
    const target=document.getElementById(id);
    if(!target)return;
    target.scrollIntoView({behavior:'instant',block:'start'});
    let destination=target;
    if(id==='contact') destination=rootRef.current.querySelector('#challenge-select');
    else if(id==='top') destination=rootRef.current.querySelector('.oe-heading');
    else if(id==='projects') destination=target.querySelector('[role="tab"][aria-selected="true"]')||target;
    else destination=target.querySelector('h2,h3')||target;
    if(!destination.matches('button,a,input,select,summary,[tabindex]')) destination.tabIndex=-1;
    destination.focus({preventScroll:true});
  }
  function choose(id) { setSelected(current=>current===id?null:id); }
  function focusAround(event,index) {
    let next;
    if(['ArrowRight','ArrowDown'].includes(event.key))next=(index+1)%topics.length;
    if(['ArrowLeft','ArrowUp'].includes(event.key))next=(index+topics.length-1)%topics.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=topics.length-1;
    if(next!==undefined){event.preventDefault();rootRef.current.querySelector(`[data-orbit="${topics[next].id}"]`).focus();}
    if(event.key==='Escape'){setSelected(null);}
  }
  function collapseChallenge(){const id=selected;setSelected(null);requestAnimationFrame(()=>rootRef.current.querySelector(`[data-orbit="${id}"]`)?.focus({preventScroll:true}));}
  function trapDialog(event){if(event.key!=='Tab')return;const items=Array.from(dialogRef.current.querySelectorAll('button,[href],input,select,textarea,summary,[tabindex]')).filter(el=>el.tabIndex>=0&&!el.disabled&&el.getClientRects().length);const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}
  function openApproach(id,event) { openerRef.current=event?.currentTarget||document.activeElement;setApproach(id); }
  function closeApproach() { dialogRef.current?.close();setApproach(null);requestAnimationFrame(()=>openerRef.current?.focus({preventScroll:true})); }
  function discuss(id) { closeApproach();requestAnimationFrame(()=>{updateEnquiry(id);jump('contact');}); }

  useEffect(()=>{updateEnquiry();rootRef.current.querySelectorAll('[data-evaluation-motion]').forEach(board=>{board.classList.add('is-paused');const b=board.querySelector('.evaluation-motion-toggle');if(b){b.textContent='Play';b.setAttribute('aria-label','Play workflow animation');b.setAttribute('title','Play workflow animation');b.removeAttribute('aria-pressed');}});},[]);
  useEffect(()=>{if(approach&&dialogRef.current&&!dialogRef.current.open)dialogRef.current.showModal();},[approach]);
  useEffect(()=>{if(selected){updateEnquiry(selected);const summary=document.getElementById('challenge-summary');if(summary&&summary.getBoundingClientRect().bottom>window.innerHeight-16)summary.scrollIntoView({behavior:'instant',block:'nearest'});}},[selected]);

  function pageClick(event) {
    const el=event.target instanceof Element?event.target:null;if(!el)return;
    const tab=el.closest('[data-work-tab]');
    if(tab){rootRef.current.querySelectorAll('[data-work-tab]').forEach(item=>{const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!active;});}
    const motion=el.closest('.evaluation-motion-toggle');
    if(motion){const board=motion.closest('[data-evaluation-motion]'),paused=!board.classList.contains('is-paused');board.classList.toggle('is-paused',paused);motion.textContent=paused?'Play':'Pause';const label=paused?'Play workflow animation':'Pause workflow animation';motion.setAttribute('aria-label',label);motion.setAttribute('title',label);motion.removeAttribute('aria-pressed');}
    const link=el.closest('a[href^="#"]');
    if(link){const id=link.getAttribute('href').slice(1);if(document.getElementById(id)){event.preventDefault();if(menuRef.current)menuRef.current.open=false;jump(id);}}
  }
  function pageKey(event) {
    const tab=event.target.closest?.('[data-work-tab]');
    if(tab){const tabs=Array.from(rootRef.current.querySelectorAll('[data-work-tab]'));let index=tabs.indexOf(tab),next;if(['ArrowDown','ArrowRight'].includes(event.key))next=(index+1)%tabs.length;if(['ArrowUp','ArrowLeft'].includes(event.key))next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();tabs[next].click();tabs[next].focus();}}
    if(event.key==='Escape'&&menuRef.current?.open){menuRef.current.open=false;menuRef.current.querySelector('summary').focus();}
  }
  return <div className="services-home orbit-site" ref={rootRef} onClick={pageClick} onKeyDown={pageKey} onChange={e=>{if(e.target.id==='challenge-select')updateEnquiry();}}>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="oe-header">
      <a className="oe-brand" href="#top" aria-label="Shivanand Kumar home"><img src="/brand/sk-mark.svg" width="56" height="56" alt=""/><span className="oe-brand-copy"><span className="oe-name">Shivanand Kumar</span><span className="oe-role">Data &amp; Applied AI Engineer</span><span className="oe-credentials">HP R&amp;D <span aria-hidden="true">|</span> ex-Amazon</span></span></a>
      <nav className="oe-navigation" aria-label="Primary navigation"><a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a><a className="oe-header-contact" href="#contact">Discuss your challenge</a></nav>
      <details className="oe-mobile-menu" ref={menuRef}><summary aria-label="Navigation menu"><ListIcon size={24}/></summary><nav aria-label="Mobile navigation"><a href="#solutions">Explore challenges</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Discuss your challenge</a></nav></details>
    </header>
    <main id="main-content" tabIndex={-1}>
      <section className="oe-hero" id="top" aria-labelledby="hero-title">
        <div className="oe-stage oe-shell">
          <div className="oe-copy"><h1 className="oe-heading" id="hero-title" tabIndex={-1}><span>Reliable data.</span><span>Practical AI.</span><span>Better operations.</span></h1><p className="oe-intro">Connect fragmented systems, automate routine work and make operational decisions clearer.</p><div className="oe-actions"><a className="oe-primary" href="#contact">Discuss your challenge</a><a className="oe-text-link" href="#projects">Explore my work</a></div></div>
          <div className="oe-orbit-column" id="solutions" aria-label="Explore a business challenge">
            <p className="oe-orbit-instruction" id="challenge-help">Choose where work gets stuck</p>
            <div className="oe-orbit" role="group" aria-label="Business challenges" aria-describedby="challenge-help">
              <div className="oe-orbit-material" aria-hidden="true"><div className="oe-core-plinth"/><div className="oe-rim-side"/><div className="oe-rim-face"/><div className="oe-rim-seam"/></div>
              <div className="oe-orbit-centre"><img className="oe-hub-model" src="/assets/circular/operations-hub.webp" width="640" height="302" alt="" aria-hidden="true"/><strong>Your<br/>operations</strong><span>Data, AI &amp; analytics</span></div>
              {topics.map((topic,index)=>{const Icon=topic.icon;return <button key={topic.id} type="button" className="oe-orbit-button" data-orbit={topic.id} style={{left:`${topic.position[0]}%`,top:`${topic.position[1]}%`}} aria-expanded={selected===topic.id} aria-controls="challenge-summary" onClick={()=>choose(topic.id)} onKeyDown={e=>focusAround(e,index)}><Icon size={28} weight="duotone" aria-hidden="true"/><span>{topic.label}</span></button>;})}
            </div>
            <div className="oe-summary-slot"><div id="challenge-summary" className="oe-summary" hidden={!selectedTopic} aria-live="polite" aria-atomic="true">{selectedTopic&&<><div className="oe-summary-heading"><h2>{selectedTopic.pain}</h2><button className="oe-icon-button" aria-label="Close challenge details" onClick={collapseChallenge}><XIcon size={18}/></button></div><p>{selectedTopic.summary}</p><button className="oe-text-link" onClick={e=>openApproach(selected,e)}>View approach <ArrowRightIcon size={19} aria-hidden="true"/></button></>}</div></div>
          </div>
        </div>
        <div className="oe-trust oe-shell"><p>Data platforms at HP. Supply chain analytics at Amazon.</p><p>For manufacturing, supply chain and service teams.</p></div>
      </section>
      <section className="oe-services" id="services" aria-label="Services"><div className="oe-service-grid oe-shell">{[{icon:DatabaseIcon,title:'Data platforms',text:'Bring your systems and data together.',id:'data'},{icon:CpuIcon,title:'Applied AI',text:'Find answers. Support better decisions.',id:'design'},{icon:FactoryIcon,title:'Operations',text:'Reduce delays. Understand capacity.',id:'process'}].map(service=>{const Icon=service.icon;return <button key={service.id} className="oe-service" onClick={e=>openApproach(service.id,e)} aria-haspopup="dialog"><Icon size={48} weight="light" aria-hidden="true"/><span className="oe-service-title">{service.title}</span><span className="oe-service-description">{service.text}</span><span className="oe-service-action">Explore <ArrowRightIcon size={17} aria-hidden="true"/></span></button>;})}</div></section>
      <LegacySections markup={legacyMarkup}/>
    </main>
    <Footer markup={footerMarkup}/>
    <dialog className="oe-dialog" ref={dialogRef} aria-labelledby="approach-title" onKeyDown={trapDialog} onCancel={e=>{e.preventDefault();closeApproach();}} onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeApproach();}}}>
      {approach&&<><div className="oe-dialog-top"><span>Explore an approach</span><button className="oe-icon-button" onClick={closeApproach} aria-label="Close approach"><XIcon size={24}/></button></div><h2 id="approach-title">{byId[approach].title}</h2><p className="oe-dialog-problem">{byId[approach].problem}</p><h3>A practical first project</h3><p>{byId[approach].approach}</p><details className="oe-inputs"><summary>Inputs, checks and review</summary><dl><dt>Start with</dt><dd>{byId[approach].inputs}</dd><dt>Measure</dt><dd>{byId[approach].measures}</dd><dt>Review</dt><dd>{byId[approach].review}</dd></dl></details><div className="oe-dialog-bottom"><button className="oe-primary" onClick={()=>discuss(approach)}>Discuss this challenge</button><p>Illustrative starting point.<br/>Scope depends on your team and data.</p></div></>}
    </dialog>
  </div>;
}
