//
//  ViewController.swift
//  Dicee-iOS13
//
//  Created by Angela Yu on 11/06/2019.
//  Copyright © 2019 London App Brewery. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var DiceImageView1: UIImageView!
    
    @IBOutlet weak var DiceImageView2: UIImageView!
    override func viewDidLoad() {
        super.viewDidLoad()
        DiceImageView1.image = UIImage(imageLiteralResourceName: "DiceSix")
        DiceImageView1.alpha=0.5
        DiceImageView2.alpha=0.8
    }

    @IBAction func RollButtonPressed(_ sender: UIButton) {
        DiceImageView1.image=UIImage(imageLiteralResourceName:"DiceFour")
        DiceImageView2.image=UIImage(imageLiteralResourceName:"DiceThree")
        
    }
    
}

