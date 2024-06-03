using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class obstaculo : MonoBehaviour
{
    [SerializeField]    
    private float velocidade = 0.8f;
    [SerializeField]
    private float varia��oPosi��oY;
    // Update is called once per frame

    private void Start()
    {
        
    }

    private void Awake()
    {
        this.transform.Translate(Vector3.up * Random.Range(-varia��oPosi��oY, varia��oPosi��oY));        
    }
    void Update()
    {
        this.transform.Translate(Vector3.left * velocidade * Time.deltaTime);

    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        this.Destruir();
    }

    private void Destruir()
    {
        Destroy(this.gameObject);
    }
}
