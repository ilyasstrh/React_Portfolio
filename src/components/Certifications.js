import React from 'react';
import '../App.css';
import AwsCP from '../images/certifs/aws_cp.png'
import gitlab from '../images/certifs/gitlab.png'
import k8sgcp from '../images/certifs/k8s_gcp.png'

function Certifications() {

    /* add certifications here */

    const certifications = [
        {
            link: "https://www.credly.com/badges/4d602eaf-0e6b-48b9-a56d-f34b64fc13f9/public_url",
            certImgSrc: AwsCP,
            certImgAlt: "AWS Certified Cloud Practitioner",
            certImgTitle: "AWS Certified Cloud Practitioner"
        },
        {
            link: "https://gitlab.badgr.com/public/assertions/DJAdw2NqSEaCAro-fP1uWA",
            certImgSrc: gitlab,
            certImgAlt: "GitLab Certified Associate",
            certImgTitle: "GitLab Certified Associate"
        },
        {
            link: "https://www.cloudskillsboost.google/public_profiles/3683917e-2212-4abf-936d-307f0117ea02/badges/3519204",
            certImgSrc: k8sgcp,
            certImgAlt: "Kubernetes in Google Cloud",
            certImgTitle: "Kubernetes in Google Cloud"
        }
    ]

    return (
        <section id="certifications" className="container">
            <h2>Certifications</h2>
            <div id="image-certifs">
                {certifications.map((certification, id) => (
                <div className='certifs' key={id}>
                    <a href={certification.link} target="_blank" title={certification.certImgTitle}>
                        <img height="150px" width="150px" src={certification.certImgSrc} alt={certification.certImgAlt} />
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;