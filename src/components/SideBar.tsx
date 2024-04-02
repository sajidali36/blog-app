import React, { useState } from 'react';
import './sidebar.css';
import {
  MDBIcon,
  MDBCollapse,
  MDBRipple,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

function SideBar() {
  // const [showShow, setShowShow] = useState(false);

  return (
    <>
      <MDBCollapse tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-sticky">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBRipple>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'>
                <MDBIcon fas icon="tachometer-alt me-3" />
                Main Dashboard
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' active aria-current='true'>
                <MDBIcon fas icon="chart-area me-3" />
                Website traffic
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="lock me-3" />
                Password
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="chart-line me-3" />
                Analitics
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="chart-pie me-3" />
                SEO
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon far icon="chart-bar me-3" />
                Orders
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="globe me-3" />
                International
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>
    </>
  );
} export default SideBar;
