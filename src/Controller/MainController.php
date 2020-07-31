<?php

namespace App\Controller;


// use Doctrine\Common\Persistence\ObjectManager;
// use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Twig\Environment;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="index" )
     * @return Response
     * Ce controller permet d'afficher la page d'accueil
     */
    public function index(): Response
    {
       
        return $this->render('index/index.html.twig');

    }

}
